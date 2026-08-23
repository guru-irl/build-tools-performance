import React from 'react';
const LABEL_24033 = 'component_24033';
export function Component24033({ value = 24033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24033, 'data-value': derived.doubled }, children);
}
export default Component24033;
