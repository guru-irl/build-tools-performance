import React from 'react';
const LABEL_11428 = 'component_11428';
export function Component11428({ value = 11428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11428, 'data-value': derived.doubled }, children);
}
export default Component11428;
