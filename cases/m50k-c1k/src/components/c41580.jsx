import React from 'react';
const LABEL_41580 = 'component_41580';
export function Component41580({ value = 41580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41580, 'data-value': derived.doubled }, children);
}
export default Component41580;
