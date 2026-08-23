import React from 'react';
const LABEL_5687 = 'component_5687';
export function Component5687({ value = 5687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5687, 'data-value': derived.doubled }, children);
}
export default Component5687;
