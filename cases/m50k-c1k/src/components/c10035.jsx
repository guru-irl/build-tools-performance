import React from 'react';
const LABEL_10035 = 'component_10035';
export function Component10035({ value = 10035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10035, 'data-value': derived.doubled }, children);
}
export default Component10035;
