import React from 'react';
const LABEL_19039 = 'component_19039';
export function Component19039({ value = 19039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19039, 'data-value': derived.doubled }, children);
}
export default Component19039;
