import React from 'react';
const LABEL_42580 = 'component_42580';
export function Component42580({ value = 42580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42580, 'data-value': derived.doubled }, children);
}
export default Component42580;
