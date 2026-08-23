import React from 'react';
const LABEL_35226 = 'component_35226';
export function Component35226({ value = 35226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35226, 'data-value': derived.doubled }, children);
}
export default Component35226;
