import React from 'react';
const LABEL_45699 = 'component_45699';
export function Component45699({ value = 45699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45699, 'data-value': derived.doubled }, children);
}
export default Component45699;
