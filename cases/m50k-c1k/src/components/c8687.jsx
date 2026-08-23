import React from 'react';
const LABEL_8687 = 'component_8687';
export function Component8687({ value = 8687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8687, 'data-value': derived.doubled }, children);
}
export default Component8687;
