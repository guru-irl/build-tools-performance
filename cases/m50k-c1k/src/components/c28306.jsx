import React from 'react';
const LABEL_28306 = 'component_28306';
export function Component28306({ value = 28306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28306, 'data-value': derived.doubled }, children);
}
export default Component28306;
