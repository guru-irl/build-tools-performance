import React from 'react';
const LABEL_22687 = 'component_22687';
export function Component22687({ value = 22687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22687, 'data-value': derived.doubled }, children);
}
export default Component22687;
