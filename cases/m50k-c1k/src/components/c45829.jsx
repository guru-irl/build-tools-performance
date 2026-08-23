import React from 'react';
const LABEL_45829 = 'component_45829';
export function Component45829({ value = 45829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45829, 'data-value': derived.doubled }, children);
}
export default Component45829;
