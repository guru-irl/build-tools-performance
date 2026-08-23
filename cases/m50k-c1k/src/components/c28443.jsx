import React from 'react';
const LABEL_28443 = 'component_28443';
export function Component28443({ value = 28443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28443, 'data-value': derived.doubled }, children);
}
export default Component28443;
