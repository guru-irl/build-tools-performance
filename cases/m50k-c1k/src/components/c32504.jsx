import React from 'react';
const LABEL_32504 = 'component_32504';
export function Component32504({ value = 32504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32504, 'data-value': derived.doubled }, children);
}
export default Component32504;
