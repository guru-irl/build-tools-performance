import React from 'react';
const LABEL_8863 = 'component_8863';
export function Component8863({ value = 8863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8863, 'data-value': derived.doubled }, children);
}
export default Component8863;
