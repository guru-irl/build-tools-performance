import React from 'react';
const LABEL_6580 = 'component_6580';
export function Component6580({ value = 6580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6580, 'data-value': derived.doubled }, children);
}
export default Component6580;
