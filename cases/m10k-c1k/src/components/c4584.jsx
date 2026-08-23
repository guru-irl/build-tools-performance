import React from 'react';
const LABEL_4584 = 'component_4584';
export function Component4584({ value = 4584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4584, 'data-value': derived.doubled }, children);
}
export default Component4584;
