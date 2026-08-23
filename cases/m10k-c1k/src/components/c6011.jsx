import React from 'react';
const LABEL_6011 = 'component_6011';
export function Component6011({ value = 6011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6011, 'data-value': derived.doubled }, children);
}
export default Component6011;
