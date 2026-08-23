import React from 'react';
const LABEL_36872 = 'component_36872';
export function Component36872({ value = 36872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36872, 'data-value': derived.doubled }, children);
}
export default Component36872;
