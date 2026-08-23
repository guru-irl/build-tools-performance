import React from 'react';
const LABEL_45508 = 'component_45508';
export function Component45508({ value = 45508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45508, 'data-value': derived.doubled }, children);
}
export default Component45508;
