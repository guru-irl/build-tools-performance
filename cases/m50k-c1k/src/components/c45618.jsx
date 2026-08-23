import React from 'react';
const LABEL_45618 = 'component_45618';
export function Component45618({ value = 45618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45618, 'data-value': derived.doubled }, children);
}
export default Component45618;
