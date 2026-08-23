import React from 'react';
const LABEL_45848 = 'component_45848';
export function Component45848({ value = 45848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45848, 'data-value': derived.doubled }, children);
}
export default Component45848;
