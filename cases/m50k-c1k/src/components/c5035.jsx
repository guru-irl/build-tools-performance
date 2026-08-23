import React from 'react';
const LABEL_5035 = 'component_5035';
export function Component5035({ value = 5035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5035, 'data-value': derived.doubled }, children);
}
export default Component5035;
