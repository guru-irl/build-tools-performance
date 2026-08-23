import React from 'react';
const LABEL_46215 = 'component_46215';
export function Component46215({ value = 46215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46215, 'data-value': derived.doubled }, children);
}
export default Component46215;
