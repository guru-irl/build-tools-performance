import React from 'react';
const LABEL_45510 = 'component_45510';
export function Component45510({ value = 45510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45510, 'data-value': derived.doubled }, children);
}
export default Component45510;
