import React from 'react';
const LABEL_45082 = 'component_45082';
export function Component45082({ value = 45082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45082, 'data-value': derived.doubled }, children);
}
export default Component45082;
