import React from 'react';
const LABEL_43404 = 'component_43404';
export function Component43404({ value = 43404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43404, 'data-value': derived.doubled }, children);
}
export default Component43404;
