import React from 'react';
const LABEL_45492 = 'component_45492';
export function Component45492({ value = 45492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45492, 'data-value': derived.doubled }, children);
}
export default Component45492;
