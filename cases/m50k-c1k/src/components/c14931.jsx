import React from 'react';
const LABEL_14931 = 'component_14931';
export function Component14931({ value = 14931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14931, 'data-value': derived.doubled }, children);
}
export default Component14931;
