import React from 'react';
const LABEL_12304 = 'component_12304';
export function Component12304({ value = 12304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12304, 'data-value': derived.doubled }, children);
}
export default Component12304;
