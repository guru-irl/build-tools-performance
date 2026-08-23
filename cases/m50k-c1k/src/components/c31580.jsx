import React from 'react';
const LABEL_31580 = 'component_31580';
export function Component31580({ value = 31580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31580, 'data-value': derived.doubled }, children);
}
export default Component31580;
