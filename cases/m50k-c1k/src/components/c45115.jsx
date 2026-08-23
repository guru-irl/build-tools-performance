import React from 'react';
const LABEL_45115 = 'component_45115';
export function Component45115({ value = 45115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45115, 'data-value': derived.doubled }, children);
}
export default Component45115;
