import React from 'react';
const LABEL_45544 = 'component_45544';
export function Component45544({ value = 45544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45544, 'data-value': derived.doubled }, children);
}
export default Component45544;
