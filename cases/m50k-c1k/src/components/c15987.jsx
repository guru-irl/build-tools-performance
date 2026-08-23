import React from 'react';
const LABEL_15987 = 'component_15987';
export function Component15987({ value = 15987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15987, 'data-value': derived.doubled }, children);
}
export default Component15987;
