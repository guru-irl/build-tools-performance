import React from 'react';
const LABEL_32035 = 'component_32035';
export function Component32035({ value = 32035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32035, 'data-value': derived.doubled }, children);
}
export default Component32035;
