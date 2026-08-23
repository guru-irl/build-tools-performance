import React from 'react';
const LABEL_45366 = 'component_45366';
export function Component45366({ value = 45366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45366, 'data-value': derived.doubled }, children);
}
export default Component45366;
