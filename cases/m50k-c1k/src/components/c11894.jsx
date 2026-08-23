import React from 'react';
const LABEL_11894 = 'component_11894';
export function Component11894({ value = 11894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11894, 'data-value': derived.doubled }, children);
}
export default Component11894;
