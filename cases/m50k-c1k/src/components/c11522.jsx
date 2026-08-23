import React from 'react';
const LABEL_11522 = 'component_11522';
export function Component11522({ value = 11522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11522, 'data-value': derived.doubled }, children);
}
export default Component11522;
