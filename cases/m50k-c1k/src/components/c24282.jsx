import React from 'react';
const LABEL_24282 = 'component_24282';
export function Component24282({ value = 24282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24282, 'data-value': derived.doubled }, children);
}
export default Component24282;
