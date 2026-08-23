import React from 'react';
const LABEL_45469 = 'component_45469';
export function Component45469({ value = 45469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45469, 'data-value': derived.doubled }, children);
}
export default Component45469;
