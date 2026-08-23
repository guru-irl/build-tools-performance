import React from 'react';
const LABEL_29645 = 'component_29645';
export function Component29645({ value = 29645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29645, 'data-value': derived.doubled }, children);
}
export default Component29645;
