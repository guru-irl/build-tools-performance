import React from 'react';
const LABEL_24924 = 'component_24924';
export function Component24924({ value = 24924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24924, 'data-value': derived.doubled }, children);
}
export default Component24924;
