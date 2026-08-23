import React from 'react';
const LABEL_45297 = 'component_45297';
export function Component45297({ value = 45297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45297, 'data-value': derived.doubled }, children);
}
export default Component45297;
