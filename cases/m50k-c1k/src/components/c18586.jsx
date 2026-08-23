import React from 'react';
const LABEL_18586 = 'component_18586';
export function Component18586({ value = 18586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18586, 'data-value': derived.doubled }, children);
}
export default Component18586;
