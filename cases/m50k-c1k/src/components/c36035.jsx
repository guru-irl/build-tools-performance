import React from 'react';
const LABEL_36035 = 'component_36035';
export function Component36035({ value = 36035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36035, 'data-value': derived.doubled }, children);
}
export default Component36035;
