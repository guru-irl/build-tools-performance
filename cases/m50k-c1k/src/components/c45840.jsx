import React from 'react';
const LABEL_45840 = 'component_45840';
export function Component45840({ value = 45840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45840, 'data-value': derived.doubled }, children);
}
export default Component45840;
