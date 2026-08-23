import React from 'react';
const LABEL_45066 = 'component_45066';
export function Component45066({ value = 45066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45066, 'data-value': derived.doubled }, children);
}
export default Component45066;
