import React from 'react';
const LABEL_27989 = 'component_27989';
export function Component27989({ value = 27989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27989, 'data-value': derived.doubled }, children);
}
export default Component27989;
