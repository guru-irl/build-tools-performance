import React from 'react';
const LABEL_19363 = 'component_19363';
export function Component19363({ value = 19363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19363, 'data-value': derived.doubled }, children);
}
export default Component19363;
