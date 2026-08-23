import React from 'react';
const LABEL_40365 = 'component_40365';
export function Component40365({ value = 40365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40365, 'data-value': derived.doubled }, children);
}
export default Component40365;
