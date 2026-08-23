import React from 'react';
const LABEL_45204 = 'component_45204';
export function Component45204({ value = 45204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45204, 'data-value': derived.doubled }, children);
}
export default Component45204;
