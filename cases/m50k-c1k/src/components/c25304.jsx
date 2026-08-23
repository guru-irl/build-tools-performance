import React from 'react';
const LABEL_25304 = 'component_25304';
export function Component25304({ value = 25304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25304, 'data-value': derived.doubled }, children);
}
export default Component25304;
