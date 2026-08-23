import React from 'react';
const LABEL_7860 = 'component_7860';
export function Component7860({ value = 7860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7860, 'data-value': derived.doubled }, children);
}
export default Component7860;
