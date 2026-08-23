import React from 'react';
const LABEL_19392 = 'component_19392';
export function Component19392({ value = 19392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19392, 'data-value': derived.doubled }, children);
}
export default Component19392;
