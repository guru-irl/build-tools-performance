import React from 'react';
const LABEL_13366 = 'component_13366';
export function Component13366({ value = 13366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13366, 'data-value': derived.doubled }, children);
}
export default Component13366;
