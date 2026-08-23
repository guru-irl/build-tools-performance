import React from 'react';
const LABEL_45460 = 'component_45460';
export function Component45460({ value = 45460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45460, 'data-value': derived.doubled }, children);
}
export default Component45460;
